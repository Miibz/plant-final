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

import sopra.formation.model.Affinite;
import sopra.formation.model.Views;
import sopra.formation.repository.IAffiniteRepository;
@RestController
@RequestMapping("/affinites")
@CrossOrigin("*")
public class AffiniteRestController {
	@Autowired
	private IAffiniteRepository affiniteRepo;

	@GetMapping("")
	@JsonView(Views.ViewAffinite.class)
	public List<Affinite> findAll() {
		return affiniteRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewAffinite.class)
	public Affinite find(@PathVariable Long id) {

		Optional<Affinite> optAffinite = affiniteRepo.findById(id);
	
		if (optAffinite.isPresent()) {
			return optAffinite.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewAffinite.class)
	public Affinite create(@RequestBody Affinite affinite) {
		affinite = affiniteRepo.save(affinite);

		return affinite;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewAffinite.class)
	public Affinite update(@RequestBody Affinite affinite, @PathVariable Long id) {
		if (!affiniteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		affinite = affiniteRepo.save(affinite);

		return affinite;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!affiniteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		affiniteRepo.deleteById(id);
	}
}
