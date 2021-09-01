package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Recette;
import sopra.formation.model.RecetteJardin;

public interface IRecetteJardinRepository extends  JpaRepository<RecetteJardin,Long> {


}
