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

import sopra.formation.model.Vegetal;
import sopra.formation.model.Views;
import sopra.formation.repository.IVegetalRepository;


@RestController
@RequestMapping("/vegetal")
@CrossOrigin("*")
public class VegetalRestController {
	@Autowired
	private IVegetalRepository vegetalRepo;

	@GetMapping("")
	@JsonView(Views.ViewVegetal.class)
	public List<Vegetal> findAll() {
		return vegetalRepo.findAll();
	}
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewVegetal.class)
	public Vegetal find(@PathVariable Long id) {

		Optional<Vegetal> optVegetal = vegetalRepo.findById(id);
	
		if (optVegetal.isPresent()) {
			return optVegetal.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/{nom}")
	@JsonView(Views.ViewVegetalWithNom.class)
	public Vegetal findWithNom(@PathVariable String nom) {

		Optional<Vegetal> optVegetal = vegetalRepo.findVegetalByNom(nom);

		if (optVegetal.isPresent()) {
			return optVegetal.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping("")
	@JsonView(Views.ViewVegetal.class)
	public Vegetal create(@RequestBody Vegetal Vegetal) {
		Vegetal = vegetalRepo.save(Vegetal);

		return Vegetal;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewVegetal.class)
	public Vegetal update(@RequestBody Vegetal Vegetal, @PathVariable Long id) {
		if (!vegetalRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		Vegetal = vegetalRepo.save(Vegetal);

		return Vegetal;
	}

//	@PatchMapping("/{id}")
//	public ResponseEntity<Vegetal> partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
//		if (!VegetalRepo.existsById(id)) {
//			return new ResponseEntity<Vegetal>(HttpStatus.NOT_FOUND);
//		}
//
//		Vegetal VegetalFind = VegetalRepo.findById(id).get();
//
//		if (updates.containsKey("nom")) {
//			VegetalFind.setNom((String) updates.get("nom"));
//		}
//		if (updates.containsKey("prenom")) {
//			VegetalFind.setPrenom((String) updates.get("prenom"));
//		}
//		if (updates.containsKey("mail")) {
//			VegetalFind.setMail((String) updates.get("mail"));
//		}
//		if (updates.containsKey("mdp")) {
//			VegetalFind.setMdp((String) updates.get("mdp"));
//		}
//
//		VegetalFind = VegetalRepo.save(VegetalFind);
//
//		return new ResponseEntity<Vegetal>(VegetalFind, HttpStatus.OK);
//	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!vegetalRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		vegetalRepo.deleteById(id);
	}
}
