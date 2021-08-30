package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.RecetteJardin;

public interface IRecetteJardinRepository extends  JpaRepository<RecetteJardin,Long> {

}
