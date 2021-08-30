package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Adresse;

public interface IAdresseRepository extends  JpaRepository<Adresse,Long> {

	
	@Query("select a from Adresse a")
	List<Adresse> findAllAdresse(); 
	
	@Query("select a from Adresse a where a.id = :id")
	Optional<Adresse> findAdresseById(@Param("id") Long id);
}
