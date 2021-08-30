package sopra.formation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Admin;
import sopra.formation.model.Personne;
import sopra.formation.model.Utilisateur;

public interface IPersonneRepository extends  JpaRepository<Personne,Long> {
	
	@Query("select u from Utilisateur u where u.id = :id")
	Optional<Utilisateur> findUtilisateurById(@Param("id") Long id);
	
	@Query("select a from Admin a where a.id = :id")
	Optional<Admin> findAdminById(@Param("id") Long id);
	
	@Query("select p from Personne p where p.pseudo = :pseudo")
	Optional<Personne> findByPseudo(@Param("pseudo") String pseudo);

}
