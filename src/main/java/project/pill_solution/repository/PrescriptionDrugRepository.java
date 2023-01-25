package project.pill_solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.pill_solution.domain.PrescriptionDrug;
public interface PrescriptionDrugRepository extends JpaRepository<PrescriptionDrug, Long> {

}
