package sopra.formation.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Personne;
import sopra.formation.model.Utilisateur;

public interface IUtilisateurRepository extends  JpaRepository<Utilisateur,Long> {
	
	@Query("select u from Utilisateur u where u.adresseMail = :adresseMail and u.motDePasse = :motDePasse")
	Optional<Utilisateur> findByEmailAndMotDePasse(@Param("adresseMail") String email, @Param("motDePasse") String motDePasse);
}
