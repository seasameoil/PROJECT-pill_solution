package project.pill_solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.pill_solution.domain.PrescriptionDrug;

@Repository
public interface PrescriptionDrugRepository extends JpaRepository<PrescriptionDrug, Long> {
}
