package project.pill_solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.pill_solution.domain.PrescriptionDrug;
import project.pill_solution.domain.Symptom;

import java.util.List;

public interface PrescriptionDrugRepository extends JpaRepository<PrescriptionDrug, Long> {

}
