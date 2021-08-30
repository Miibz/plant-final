package sopra.formation.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Adresse;
import sopra.formation.model.Views;
import sopra.formation.repository.IAdresseRepository;

@RestController
@RequestMapping("/adresse")
@CrossOrigin("*")
public class AdresseRestController {

	@Autowired
	private IAdresseRepository adresseRepo;

	@GetMapping("")
	@JsonView(Views.ViewAdresse.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Adresse> findAll() {
		return adresseRepo.findAllAdresse();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewAdresse.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public Adresse find(@PathVariable Long id) {

		Optional<Adresse> optAdresse = adresseRepo.findAdresseById(id);

		if (optAdresse.isPresent()) {
			return optAdresse.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/my/{id}")
	@JsonView(Views.ViewAdresse.class)
//	@PreAuthorize("hasAnyRole('UTILISATEUR')")
	public Adresse findMy() {//id de la personne
		Long id=4L;
		Optional<Adresse> optAdresse = adresseRepo.findAdresseById(id);
		if (optAdresse.isPresent()) {
			return optAdresse.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdresse.class)
	public Adresse create(@RequestBody Adresse adresse) {
		adresse = adresseRepo.save(adresse);

		return adresse;
	}
	
	@PostMapping("/my/")
//	@PreAuthorize("hasAnyRole('UTILISATEUR')")
	@JsonView(Views.ViewAdresse.class)
	public Adresse createMy(@RequestBody Adresse adresse) {
		adresse = adresseRepo.save(adresse);

		return adresse;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewAdresse.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public Adresse update(@RequestBody Adresse adresse, @PathVariable Long id) {
		if (!adresseRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		adresse = adresseRepo.save(adresse);

		return adresse;
	}
	
	@PutMapping("/my/{id}")
	@JsonView(Views.ViewAdresse.class)
//	@PreAuthorize("hasAnyRole('UTILISATEUR')")
	public Adresse updateMy(@RequestBody Adresse adresse, @PathVariable Long id) {
		if (!adresseRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		adresse = adresseRepo.save(adresse);

		return adresse;
	}

	@DeleteMapping("/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if (!adresseRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		adresseRepo.deleteById(id);
	}
	@DeleteMapping("/my/{id}")
//	@PreAuthorize("hasAnyRole('UTILISATEUR')")
	public void deleteMy(@PathVariable Long id) {
		if (!adresseRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		adresseRepo.deleteById(id);
	}
}
