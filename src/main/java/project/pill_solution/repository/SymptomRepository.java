package project.pill_solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.pill_solution.domain.Symptom;

import java.util.List;

@Repository
public interface SymptomRepository extends JpaRepository<Symptom, Long> {
}
