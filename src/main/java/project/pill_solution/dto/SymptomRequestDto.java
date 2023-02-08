package project.pill_solution.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter @Setter
public class SymptomRequestDto {

    private Long symptomId;

    private String symptomName;

    private List<String> symptomDetail;


}
