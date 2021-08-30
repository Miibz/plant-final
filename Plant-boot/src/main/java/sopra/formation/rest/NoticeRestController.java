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

import sopra.formation.model.Notice;
import sopra.formation.model.Views;
import sopra.formation.repository.INoticeRepository;

@RestController
@RequestMapping("/notice")
@CrossOrigin("*")
public class NoticeRestController {

	
	@Autowired
	private INoticeRepository noticeRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewNotice.class)
	public List<Notice> findAll() {
		return noticeRepo.findAll();
	}
	
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewNotice.class)
	public Notice find(@PathVariable Long id) {

		Optional<Notice> optNotice = noticeRepo.findById(id);
	
		if (optNotice.isPresent()) {
			return optNotice.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	public Notice create(@RequestBody Notice notice) {
		notice = noticeRepo.save(notice);

		return notice;
	}

	@PutMapping("/{id}")
	public Notice update(@RequestBody Notice notice, @PathVariable Long id) {
		if (!noticeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		notice = noticeRepo.save(notice);

		return notice;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!noticeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		noticeRepo.deleteById(id);
	}
}

