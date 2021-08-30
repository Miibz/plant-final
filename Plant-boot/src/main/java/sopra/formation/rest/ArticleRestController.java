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

import sopra.formation.model.Article;
import sopra.formation.model.Views;
import sopra.formation.repository.IArticleRepository;

@RestController
@RequestMapping("/article")
@CrossOrigin("*")
public class ArticleRestController {

	@Autowired
	private IArticleRepository articleRepo;

	@GetMapping("")
	@JsonView(Views.ViewArticle.class)
	public List<Article> findAll() {
		return articleRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewArticle.class)
	public Article find(@PathVariable Long id) {

		Optional<Article> optArticle = articleRepo.findById(id);
	
		if (optArticle.isPresent()) {
			return optArticle.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewArticle.class)
	public Article create(@RequestBody Article article) {
		article = articleRepo.save(article);

		return article;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewArticle.class)
	public Article update(@RequestBody Article article, @PathVariable Long id) {
		if (!articleRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		article = articleRepo.save(article);

		return article;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!articleRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		articleRepo.deleteById(id);
	}
}
