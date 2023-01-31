package project.pill_solution.domain;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.pill_solution.converter.StringListConverter;

import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "prescription")
public class Prescription {

    @Id @Column(name = "prescription_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescriptionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "symptom_id")@Getter
    private Symptom symptom;

    @Column @Getter
    @Convert(converter = StringListConverter.class)
    private List<String> prescriptionDetail; // 처방에 대한 세부설명

    @Column @Getter
    private String drugName; // 약 이름

    @Column @Getter
    private String drugEat; // 복용법

    @Column @Getter
    private String drugEffect; // 효과
    
    @Column
    private String drugImageUrl; //이미지 URL (저장용)

    @Column @Getter
    private String drugProvideImageUrl; //이미지 URL (보여주기용)

    @Getter @Setter
    @Convert(converter = StringListConverter.class)
    List<String> cureUrl; // 치료방법 URL



}
