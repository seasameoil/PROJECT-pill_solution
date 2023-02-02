package project.pill_solution.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class PrescriptionRequestDto {

    //디테일 페이지 제공 내용 [증상명, 세부상황, 약명, 복용법, 효과, 치료방법요약, 관련 URL]

    private Long SymptomId; // 증상 id

    private String symptomName; // 증상명

    private String symptomDetail; // 증상 세부사항

    private String drugName; // 약 이름

    private String drugEat; // 복용법

    private String drugEffect; // 효과

    List<String> cureUrl; // 치료방법 URL + 치료방법 요약
}
