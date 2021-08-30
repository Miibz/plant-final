package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Article;

public interface IArticleRepository extends  JpaRepository<Article,Long> {

}
