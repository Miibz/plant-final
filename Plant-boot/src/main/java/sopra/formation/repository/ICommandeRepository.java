package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Adresse;
import sopra.formation.model.Commande;

public interface ICommandeRepository extends  JpaRepository<Commande,Long> {

	@Query("select c from Commande c")
	List<Commande> findAllCommande(); 
	
	@Query("select c from Commande c where c.id = :id")
	Optional<Commande> findCommandeById(@Param("id") Long id);
}
