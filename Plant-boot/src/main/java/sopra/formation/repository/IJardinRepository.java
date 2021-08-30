package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Jardin;

public interface IJardinRepository extends  JpaRepository<Jardin,Long> 
{

	@Query("select j from Jardin j")
	List<Jardin> findAll();
	
	@Query("select j from Jardin j where j.id = :id")
	Optional<Jardin> findJardinById(@Param("id") Long id);
}
