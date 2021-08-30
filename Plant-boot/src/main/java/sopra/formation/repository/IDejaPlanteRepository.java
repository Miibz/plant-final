package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.DejaPlante;

public interface IDejaPlanteRepository extends  JpaRepository<DejaPlante,Long> {

}
