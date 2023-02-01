package project.pill_solution.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.pill_solution.converter.StringListConverter;

import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "symptom")
public class Symptom {

    @Id @Column(name = "symptom_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long symptomId;

    @Column @Getter
    private String symptomName;
    @Column
    private String symptomDetail;
    @Convert(converter = StringListConverter.class)
    @Column
    private List<String> cureUrl;
    @Column
    private String imageUrl;
    @Column @Getter
    private String provideUrl;
}
