package project.pill_solution.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SymptomResponseDto {

    //메인페이지 제공 내용 [병명, 이미지]
    private String symptomName;
    private String provideUrl;
}
