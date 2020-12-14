package com.karius.pathmgmt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.ws.rs.Consumes;
import java.util.List;
import java.util.Map;

/**
 * Handles incoming HTTP request and delegates execution to the Java service
 */

@RestController
@RequestMapping("/pathogenmanagement/api/1")
public class PathogenManagementController {
  /**
   * Handle the get request for pathogen query
   */
  @RequestMapping(value = "/pathogens", method = RequestMethod.GET)
  public @ResponseBody
  ResponseEntity<List<String>> getPathogens(@RequestParam("pathogenCommonName") String pathogenCommonName,
                                            @RequestParam("pathogenSequence") String pathogenSequence,
                                            @RequestParam("sortOrder") String sortOrder,
                                            @RequestParam("pageNumber") int pageNumber,
                                            @RequestParam("pageSize") int pageSize) {
    return null;
  }

  @RequestMapping(value = "/pathogens", method = RequestMethod.POST)
  public @ResponseBody
  ResponseEntity<String> createNewPathogen(@RequestBody Map<String, Object> payload) throws Exception {
    return null;
  }

  @RequestMapping(value = "/pathogens/{pathogenName}", method = RequestMethod.PUT)
  public @ResponseBody
  ResponseEntity<String> updatePathogen(@PathVariable String pathogenName, @RequestBody Map<String, Object> payload) {
    return null;
  }

  @RequestMapping(value = "/pathogens/{pathogenName}/file", method = RequestMethod.PUT)
  @Consumes("multipart/form-data")
  public String uploadFileHandler(@RequestPart("uploadPathogenFile") MultipartFile[] files ) {
    return null;
  }
}
