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

import sopra.formation.model.SousGuide;
import sopra.formation.model.Views;
import sopra.formation.repository.ISousGuideRepository;
@RestController
@RequestMapping("/sousGuide")
@CrossOrigin("*")
public class SousGuideRestController {
	@Autowired
	private ISousGuideRepository SousGuideRepo;

	@GetMapping("")
	@JsonView(Views.ViewSousGuide.class)
	public List<SousGuide> findAll() {
		return SousGuideRepo.findAll();
	}
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewSousGuide.class)
	public SousGuide find(@PathVariable Long id) {

		Optional<SousGuide> optSousGuide = SousGuideRepo.findById(id);
	
		if (optSousGuide.isPresent()) {
			return optSousGuide.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping("")
	@JsonView(Views.ViewSousGuide.class)
	public SousGuide create(@RequestBody SousGuide SousGuide) {
		SousGuide = SousGuideRepo.save(SousGuide);

		return SousGuide;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewSousGuide.class)
	public SousGuide update(@RequestBody SousGuide SousGuide, @PathVariable Long id) {
		if (!SousGuideRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		SousGuide = SousGuideRepo.save(SousGuide);

		return SousGuide;
	}

//	@PatchMapping("/{id}")
//	public ResponseEntity<SousGuide> partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
//		if (!SousGuideRepo.existsById(id)) {
//			return new ResponseEntity<SousGuide>(HttpStatus.NOT_FOUND);
//		}
//
//		SousGuide SousGuideFind = SousGuideRepo.findById(id).get();
//
//		if (updates.containsKey("nom")) {
//			SousGuideFind.setNom((String) updates.get("nom"));
//		}
//		if (updates.containsKey("prenom")) {
//			SousGuideFind.setPrenom((String) updates.get("prenom"));
//		}
//		if (updates.containsKey("mail")) {
//			SousGuideFind.setMail((String) updates.get("mail"));
//		}
//		if (updates.containsKey("mdp")) {
//			SousGuideFind.setMdp((String) updates.get("mdp"));
//		}
//
//		SousGuideFind = SousGuideRepo.save(SousGuideFind);
//
//		return new ResponseEntity<SousGuide>(SousGuideFind, HttpStatus.OK);
//	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!SousGuideRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		SousGuideRepo.deleteById(id);
	}
}
