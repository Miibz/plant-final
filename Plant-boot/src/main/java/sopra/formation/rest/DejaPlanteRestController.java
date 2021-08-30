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

import sopra.formation.model.DejaPlante;
import sopra.formation.model.Views;
import sopra.formation.repository.IDejaPlanteRepository;

@RestController
@RequestMapping("/dejaPlante")
@CrossOrigin("*")
public class DejaPlanteRestController {

	@Autowired
	private IDejaPlanteRepository dejaPlanteRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewDejaPlante.class)
	public List<DejaPlante> findAll() {
		return dejaPlanteRepo.findAll();
	}
	
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewDejaPlante.class)
	public DejaPlante find(@PathVariable Long id) {

		Optional<DejaPlante> optDejaPlante = dejaPlanteRepo.findById(id);
	
		if (optDejaPlante.isPresent()) {
			return optDejaPlante.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	@JsonView(Views.ViewDejaPlante.class)
	public DejaPlante create(@RequestBody DejaPlante dejaPlante) {
		dejaPlante = dejaPlanteRepo.save(dejaPlante);

		return dejaPlante;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewDejaPlante.class)
	public DejaPlante update(@RequestBody DejaPlante dejaPlante, @PathVariable Long id) {
		if (!dejaPlanteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		dejaPlante = dejaPlanteRepo.save(dejaPlante);

		return dejaPlante;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!dejaPlanteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		dejaPlanteRepo.deleteById(id);
	}
}
