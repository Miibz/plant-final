package sopra.formation.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import sopra.formation.model.Recherche;
import sopra.formation.model.Views;
import sopra.formation.repository.IRechercheRepository;

@RestController
@RequestMapping("/recherche")
@CrossOrigin("*")
public class RechercheRestController {

	@Autowired
	private IRechercheRepository rechercheRepo;

	@GetMapping("")
	@JsonView(Views.ViewRecherche.class)
	public List<Recherche> findAll() {
		return rechercheRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewRecherche.class)
	public Recherche find(@PathVariable Long id) {

		Optional<Recherche> optRecherche = rechercheRepo.findById(id);
	
		if (optRecherche.isPresent()) {
			return optRecherche.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewRecherche.class)
	public Recherche create(@RequestBody Recherche recherche) {
		recherche = rechercheRepo.save(recherche);

		return recherche;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewRecherche.class)
	public Recherche update(@RequestBody Recherche recherche, @PathVariable Long id) {
		if (!rechercheRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		recherche = rechercheRepo.save(recherche);

		return recherche;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!rechercheRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		rechercheRepo.deleteById(id);
	}
}
