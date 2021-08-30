package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.SousGuide;

public interface ISousGuideRepository extends  JpaRepository<SousGuide,Long> {

}
