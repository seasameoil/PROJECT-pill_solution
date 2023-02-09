package project.pill_solution.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import project.pill_solution.domain.Symptom;
import project.pill_solution.dto.SymptomRequestDto;
import project.pill_solution.repository.SymptomRepository;

import java.io.IOException;


@Service
@RequiredArgsConstructor
@Slf4j
public class SymptomService {

    private final AwsS3Uploader awsS3Uploader;
    private final SymptomRepository symptomRepository;

    @Transactional
    public void uploadSymptom(MultipartFile image, SymptomRequestDto requestDto) throws IOException {

        // 이미지 업로드
        String fileName = awsS3Uploader.upload(image);
        String savePath = awsS3Uploader.getFile(fileName);

        Symptom symptom = new Symptom();

        //DTO -> Entity
        symptom.toEntity(requestDto,fileName,savePath);

        //저장
        symptomRepository.save(symptom);

    }

}
