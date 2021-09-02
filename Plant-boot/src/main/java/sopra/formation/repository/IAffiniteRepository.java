package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Affinite;
import sopra.formation.model.Vegetal;

public interface IAffiniteRepository extends  JpaRepository<Affinite,Long> {
	
	@Query("select a.vegetal2 from Affinite a where a.vegetal1.id=:id ")
	Optional<List<Vegetal>> findVegetauxById1(@Param("id") Long id);
	
	@Query("select a.vegetal1 from Affinite a where a.vegetal2.id=:id ")
	Optional<List<Vegetal>> findVegetauxById2(@Param("id") Long id);
	
}
