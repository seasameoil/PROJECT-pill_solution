package project.pill_solution.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MainPageService {

    private final SymptomRepository symptomRepository;

    /**
     * 게시글 목록 가져오기
     * List 안에 이미지, 증상명 제공
     */
    public List<SymptomResponseDto> symptomList() {

        List<Symptom> symptoms = symptomRepository.findAll();
        List<SymptomResponseDto> responseDto = new ArrayList<>();

        for(Symptom symptom : symptoms) {

            SymptomResponseDto tempDto = new SymptomResponseDto();
            tempDto.setSymptomName(symptom.getSymptomName());
            tempDto.setProvideUrl(symptom.getProvideUrl());

            responseDto.add(tempDto);
        }

        return responseDto;
    }
}
