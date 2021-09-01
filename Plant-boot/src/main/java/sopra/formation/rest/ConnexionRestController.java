package sopra.formation.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;
import sopra.formation.repository.IUtilisateurRepository;
import sopra.formation.rest.dto.UserDTO;



@RestController
@CrossOrigin("*")
public class ConnexionRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@PostMapping("/connexion")
	@JsonView(Views.ViewConnexion.class)
	public UserDTO utilisateur(@RequestBody UserDTO userDTO) {
		Optional<Utilisateur> utilisateur = utilisateurRepo.findByEmailAndMotDePasse(userDTO.getLogin(),userDTO.getPassword());
		System.out.println(userDTO.getLogin());
		System.out.println(userDTO.getPassword());

		if (utilisateur.isPresent()) {
			userDTO.setUtilisateur(utilisateur.get());
			userDTO.setType(utilisateur.get().getClass().getSimpleName());

			return userDTO;
		} else {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Login/password introuvable");
		}
	}
}
