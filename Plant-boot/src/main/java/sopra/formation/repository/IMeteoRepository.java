package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Meteo;

public interface IMeteoRepository extends  JpaRepository<Meteo,Long> {

	@Query("select m from Meteo m")
	List<Meteo> findAllMeteo(); 
	
	@Query("select m from Meteo m where m.id = :id")
	Optional<Meteo> findMeteoById(@Param("id") Long id);
}
