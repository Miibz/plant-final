package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Recherche;

public interface IRechercheRepository extends  JpaRepository<Recherche,Long> {

}
