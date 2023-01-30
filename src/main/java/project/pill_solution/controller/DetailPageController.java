package project.pill_solution.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.pill_solution.dto.PrescriptionResponseDto;
import project.pill_solution.service.DetailPageService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{symptomId}")
public class DetailPageController {

    private final DetailPageService detailPageService;
    @GetMapping
    public List<PrescriptionResponseDto> list(@PathVariable("symptomId") Long id) {

        return detailPageService.prescriptionList(id);
    }
}



