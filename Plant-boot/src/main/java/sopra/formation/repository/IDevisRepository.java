package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Devis;

public interface IDevisRepository extends  JpaRepository<Devis,Long> {
	
	@Query("select d from Devis d")
	List<Devis> findAll();

	@Query("select d from Devis d where d.id = :id")
	Optional<Devis> findFormateurById(@Param("id") Long id);
}
