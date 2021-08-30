package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Notice;

public interface INoticeRepository extends  JpaRepository<Notice,Long> {

}
