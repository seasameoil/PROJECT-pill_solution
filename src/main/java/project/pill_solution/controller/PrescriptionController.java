package project.pill_solution.controller;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import project.pill_solution.domain.Prescription;
import project.pill_solution.dto.PrescriptionRequestDto;
import project.pill_solution.dto.PrescriptionResponseDto;
import project.pill_solution.dto.SymptomRequestDto;
import project.pill_solution.service.AwsS3Uploader;
import project.pill_solution.service.PrescriptionService;
import project.pill_solution.service.SymptomService;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/pill_solution")
public class PrescriptionController {
    private final PrescriptionService prescriptionService;
    private final SymptomService symptomService;

    @PostMapping("/upload")
    public ResponseEntity upload(@RequestPart(value = "image")MultipartFile image,
                                 @RequestPart(value = "prescription") PrescriptionRequestDto requestDto) throws IOException {

        prescriptionService.upload(image, requestDto);

        return new ResponseEntity<>("success", HttpStatus.CREATED);
    }

    @PostMapping("/symptom/upload")
    public ResponseEntity<?> symptomUpload(@RequestPart(value = "image")MultipartFile image,
                                           @RequestPart(value = "symptom")SymptomRequestDto requestDto) throws IOException{

        symptomService.uploadSymptom(image, requestDto);

        return new ResponseEntity<>("success", HttpStatus.CREATED);

    }



}