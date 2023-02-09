package project.pill_solution.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import project.pill_solution.domain.Prescription;
import project.pill_solution.domain.Symptom;
import project.pill_solution.dto.PrescriptionRequestDto;
import project.pill_solution.repository.PrescriptionRepository;
import project.pill_solution.repository.SymptomRepository;

import java.io.IOException;

@Service
@RequiredArgsConstructor
@Slf4j
public class PrescriptionService {

    private final AwsS3Uploader awsS3Uploader;
    private final PrescriptionRepository prescriptionRepository;
    private final SymptomRepository symptomRepository;

    @Transactional
    public void upload(MultipartFile image, PrescriptionRequestDto requestDto) throws IOException {

        //이미지 업로드
        String fileName = awsS3Uploader.upload(image); //보여주는 이미지 URL
        String savePath = awsS3Uploader.getFile(fileName); //저장용 이미지 URL

        Symptom symptom = symptomRepository.findById(requestDto.getSymptomId())
                .orElseThrow(EntityNotFoundException::new);

        //DTO -> Entity
        Prescription pre = Prescription.builder()
                .symptom(symptom)
                .requestDto(requestDto)
                .uploadPath(fileName)
                .savePath(savePath)
                .build();

        //저장
        prescriptionRepository.save(pre);
    }
}
