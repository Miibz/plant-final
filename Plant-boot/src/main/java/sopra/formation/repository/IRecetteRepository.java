package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Recette;

public interface IRecetteRepository extends  JpaRepository<Recette,Long> {
	
	@Query("select r from Recette r")
	List<Recette> findAll();

	@Query("select r from Recette r where r.id = :id")
	Optional<Recette> findFormateurById(@Param("id") Long id);
}
