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

import sopra.formation.model.GuideUtilisation;
import sopra.formation.model.Views;
import sopra.formation.repository.IGuideUtilisationRepository;
@RestController
@RequestMapping("/guideUtilisation")
@CrossOrigin("*")
public class GuideUtilisationRestController {
	@Autowired
	private IGuideUtilisationRepository GuideUtilisationRepo;

	@GetMapping("")
	@JsonView(Views.ViewGuideUtilisation.class)
	public List<GuideUtilisation> findAll() {
		return GuideUtilisationRepo.findAll();
	}
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewGuideUtilisation.class)
	public GuideUtilisation find(@PathVariable Long id) {

		Optional<GuideUtilisation> optGuideUtilisation = GuideUtilisationRepo.findById(id);
	
		if (optGuideUtilisation.isPresent()) {
			return optGuideUtilisation.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping("")
	@JsonView(Views.ViewGuideUtilisation.class)
	public GuideUtilisation create(@RequestBody GuideUtilisation GuideUtilisation) {
		GuideUtilisation = GuideUtilisationRepo.save(GuideUtilisation);

		return GuideUtilisation;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewGuideUtilisation.class)
	public GuideUtilisation update(@RequestBody GuideUtilisation GuideUtilisation, @PathVariable Long id) {
		if (!GuideUtilisationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		GuideUtilisation = GuideUtilisationRepo.save(GuideUtilisation);

		return GuideUtilisation;
	}

//	@PatchMapping("/{id}")
//	public ResponseEntity<GuideUtilisation> partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
//		if (!GuideUtilisationRepo.existsById(id)) {
//			return new ResponseEntity<GuideUtilisation>(HttpStatus.NOT_FOUND);
//		}
//
//		GuideUtilisation GuideUtilisationFind = GuideUtilisationRepo.findById(id).get();
//
//		if (updates.containsKey("nom")) {
//			GuideUtilisationFind.setNom((String) updates.get("nom"));
//		}
//		if (updates.containsKey("prenom")) {
//			GuideUtilisationFind.setPrenom((String) updates.get("prenom"));
//		}
//		if (updates.containsKey("mail")) {
//			GuideUtilisationFind.setMail((String) updates.get("mail"));
//		}
//		if (updates.containsKey("mdp")) {
//			GuideUtilisationFind.setMdp((String) updates.get("mdp"));
//		}
//
//		GuideUtilisationFind = GuideUtilisationRepo.save(GuideUtilisationFind);
//
//		return new ResponseEntity<GuideUtilisation>(GuideUtilisationFind, HttpStatus.OK);
//	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!GuideUtilisationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		GuideUtilisationRepo.deleteById(id);
	}
}
