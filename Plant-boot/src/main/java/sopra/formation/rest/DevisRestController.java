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

import sopra.formation.model.Devis;
import sopra.formation.model.Views;
import sopra.formation.repository.IDevisRepository;

@RestController
@RequestMapping("/devis")
@CrossOrigin("*")
public class DevisRestController {

	@Autowired
	private IDevisRepository devisRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewDevis.class)
	public List<Devis> findAll() {
		return devisRepo.findAll();
	}
	
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewDevis.class)
	public Devis find(@PathVariable Long id) {

		Optional<Devis> optDevis = devisRepo.findById(id);
	
		if (optDevis.isPresent()) {
			return optDevis.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	public Devis create(@RequestBody Devis devis) {
		devis = devisRepo.save(devis);

		return devis;
	}

	@PutMapping("/{id}")
	public Devis update(@RequestBody Devis devis, @PathVariable Long id) {
		if (!devisRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		devis = devisRepo.save(devis);

		return devis;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!devisRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		devisRepo.deleteById(id);
	}
}
