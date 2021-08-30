package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.GuideUtilisation;

public interface IGuideUtilisationRepository extends  JpaRepository<GuideUtilisation,Long> {

}
