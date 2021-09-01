package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.GuideUtilisation;

public interface IGuideUtilisationRepository extends  JpaRepository<GuideUtilisation,Long> {

	@Query("select g from GuideUtilisation g where g.nom LIKE CONCAT('%',:nom,'%')")
	Optional<List<GuideUtilisation>> findGuidesByNom(@Param("nom") String nom);
}
