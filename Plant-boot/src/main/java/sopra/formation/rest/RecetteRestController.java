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

import sopra.formation.model.Recette;
import sopra.formation.model.Views;
import sopra.formation.repository.IRecetteRepository;

@RestController
@RequestMapping("/recette")
@CrossOrigin("*")
public class RecetteRestController {

	@Autowired
	private IRecetteRepository recetteRepo;

	@GetMapping("")
	@JsonView(Views.ViewRecette.class)
	public List<Recette> findAll() {
		return recetteRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewRecette.class)
	public Recette find(@PathVariable Long id) {

		Optional<Recette> optRecette = recetteRepo.findById(id);
	
		if (optRecette.isPresent()) {
			return optRecette.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/recherche/{nom}")
	@JsonView(Views.ViewRecetteByNom.class)
	public List<Recette> findRecettesWithNom(@PathVariable String nom) {

		Optional<List<Recette>> optRecette = recetteRepo.findRecettesByNom(nom);

		if (optRecette.isPresent()) {
			return (List<Recette>) optRecette.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewRecette.class)
	public Recette create(@RequestBody Recette recette) {
		recette = recetteRepo.save(recette);

		return recette;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewRecette.class)
	public Recette update(@RequestBody Recette recette, @PathVariable Long id) {
		if (!recetteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		recette = recetteRepo.save(recette);

		return recette;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!recetteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		recetteRepo.deleteById(id);
	}
}
