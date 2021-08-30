package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Facture;

public interface IFactureRepository extends  JpaRepository<Facture,Long> {

}
