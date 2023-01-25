package project.pill_solution.domain;

import jakarta.persistence.*;

import lombok.NoArgsConstructor;
import project.pill_solution.converter.StringListConverter;

@Entity
@NoArgsConstructor
@Table(name = "PrescriptionDrug")
public class PrescriptionDrug {

    @Id @Column(name = "prescriptionDrug_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescriptionDrugId;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "symptom_id")
    private Symptom symptom;

    @Column
    private String PrescriptionDrugName;

    @Column
    private String PrescriptionDrugDetail;

    @Column
    private String imageUrl;

    @Column
    private int prescriptionDrugNumber;


}
