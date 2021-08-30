package sopra.formation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Vegetal;

public interface IVegetalRepository extends  JpaRepository<Vegetal,Long> {

	@Query("select v from Vegetal v where v.nom = :nom")
	Optional<Vegetal> findVegetalByNom(@Param("nom") String nom);
}

