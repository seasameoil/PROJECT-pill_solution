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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DetailPageService {

    private final PrescriptionRepository prescriptionRepository;


    public List<PrescriptionResponseDto> prescriptionList(Long id){

        List<Prescription> prescriptions = prescriptionRepository.findBySymptom_SymptomId(id);
        List<PrescriptionResponseDto> responseDto = new ArrayList<>();

        for(Prescription prescription : prescriptions){

            PrescriptionResponseDto tempDto = new PrescriptionResponseDto();
            tempDto.setSymptomName(prescription.getSymptom().getSymptomName());
            tempDto.setSymptomDetail(prescription.getPrescriptionDetail());
            tempDto.setDrugName(prescription.getDrugName());
            tempDto.setDrugEat(prescription.getDrugEat());
            tempDto.setDrugEffect(prescription.getDrugEffect());
            tempDto.setDrugProvideImageUrl(prescription.getDrugImageUrl());
            tempDto.setCureUrl(prescription.getCureUrl());

            responseDto.add(tempDto);
        }

        return responseDto;
    }



}
