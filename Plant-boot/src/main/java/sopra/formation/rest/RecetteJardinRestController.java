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

import sopra.formation.model.RecetteJardin;
import sopra.formation.model.Views;
import sopra.formation.repository.IRecetteJardinRepository;

@RestController
@RequestMapping("/recetteJardin")
@CrossOrigin("*")
public class RecetteJardinRestController {

	@Autowired
	private IRecetteJardinRepository recetteJardinRepo;

	@GetMapping("")
	@JsonView(Views.ViewRecetteJardin.class)
	public List<RecetteJardin> findAll() {
		return recetteJardinRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewRecetteJardin.class)
	public RecetteJardin find(@PathVariable Long id) {

		Optional<RecetteJardin> optRecetteJardin = recetteJardinRepo.findById(id);
	
		if (optRecetteJardin.isPresent()) {
			return optRecetteJardin.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewRecetteJardin.class)
	public RecetteJardin create(@RequestBody RecetteJardin recetteJardin) {
		recetteJardin = recetteJardinRepo.save(recetteJardin);

		return recetteJardin;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewRecetteJardin.class)
	public RecetteJardin update(@RequestBody RecetteJardin recetteJardin, @PathVariable Long id) {
		if (!recetteJardinRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		recetteJardin = recetteJardinRepo.save(recetteJardin);

		return recetteJardin;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!recetteJardinRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		recetteJardinRepo.deleteById(id);
	}
}
