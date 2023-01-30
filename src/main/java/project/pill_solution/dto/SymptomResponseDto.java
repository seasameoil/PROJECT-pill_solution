package project.pill_solution.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class SymptomResponseDto {

    //메인페이지 제공 내용 [병명, 이미지]
    private String symptomName;
    private String provideUrl;

    //메인페이지에서 상세정보를 보여주는 것을 확인하고 메인 페이지 상세정보 변수를 DTO 클래스에 추가하였습니다.
    private List<String> prescriptionDetail;


}
