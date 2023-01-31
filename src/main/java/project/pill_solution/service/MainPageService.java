package project.pill_solution.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.pill_solution.domain.Prescription;
import project.pill_solution.domain.Symptom;
import project.pill_solution.dto.PrescriptionResponseDto;
import project.pill_solution.dto.SymptomResponseDto;
import project.pill_solution.repository.PrescriptionRepository;
import project.pill_solution.repository.SymptomRepository;

import java.util.ArrayList;
import java.util.List;

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
            tempDto.setPrescriptionDetail(symptom.getSymptomDetail());

            responseDto.add(tempDto);
        }



        return responseDto;
    }
}
