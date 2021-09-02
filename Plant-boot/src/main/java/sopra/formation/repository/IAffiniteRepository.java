package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Affinite;

public interface IAffiniteRepository extends  JpaRepository<Affinite,Long> {
}
