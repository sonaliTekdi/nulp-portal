import { Injectable } from "@angular/core";
import { ConfigService } from "@sunbird/shared";
import { LearnerService } from "@sunbird/core";

@Injectable({
  providedIn: "root",
})
export class AddusserService {
  public config: ConfigService;
  constructor(
    private learnerService: LearnerService,
    public configService: ConfigService
  ) {}

  createUserDetailSave(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.USER.SIGNUP,
      data: data,
    };
    return this.learnerService.post(options);
  }
  userSearch(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.USER_SEARCH,
      data: data,
    };
    return this.learnerService.post(options);
  }

  orgSearch(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.ORG_SEARCH_OLD,
      data: data,
    };
    return this.learnerService.post(options);
  }

  getOrgDetail(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.ORG_SEARCH_OLD,
      data: data,
    };
    return this.learnerService.post(options);
  }

  userBlock(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.DELETE_USER,
      data: data,
    };
    return this.learnerService.post(options);
  }
  userUnBlock(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.UNDELETE_USER,
      data: data,
    };
    return this.learnerService.post(options);
  }
  addroleSubRootOrganization(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.UPDATE_USER_ORG_ROLES,
      data: data,
    };
    return this.learnerService.post(options);
  }

  addroleRootOrganization(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.UPDATE_USER_ORG_ROLES,
      data: data,
    };
    return this.learnerService.post(options);
  }
  getEditUserById(data) {
    const option = {
      url: this.configService.urlConFig.URLS.USER.GET_PROFILE + data,
    };
    return this.learnerService.get(option);
  }
  updateUserData(data) {
    const options = {
      url: this.configService.urlConFig.URLS.USER.UPDATE_USER_PROFILE,
      data: data,
    };
    return this.learnerService.patch(options);
  }
  removeOrg(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.MEMBERREMOVE,
      data: data,
    };
    return this.learnerService.post(options);
  }

  //organization service code

  getorgData(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.READ,
      data: data,
    };
    return this.learnerService.post(options);
  }
  getSuborgData(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.ORG_SEARCH_OLD,
      data: data,
    };
    return this.learnerService.post(options);
  }

  updateOrgDetail(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.UPDATE,
      data: data,
    };
    return this.learnerService.patch(options);
  }

  updateOrgStatusDetail(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.STATUSUPDATE,
      data: data,
    };
    return this.learnerService.patch(options);
  }

  createOrgDetailSave(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.ORG_CREATE,
      data: data,
    };
    return this.learnerService.post(options);
  }

  createRootOrgDetailSave(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.ORG_CREATE,
      data: data,
    };
    return this.learnerService.post(options);
  }

  createForm(data) {
    console.log(data);
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.FORMCREATEORG,
      data: data,
    };
    return this.learnerService.post(options);
  }

  bulkUserUpload(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ADMIN.BULK.USERS_UPLOAD,
      data: data,
    };
    return this.learnerService.post(options);
  }

  updatePatch(data, orgId) {
    console.log(data);
    const options = {
      url:
        this.configService.urlConFig.URLS.ORGANIZATION.UPDATEPATCH +
        "/" +
        orgId,
      data: data,
    };
    return this.learnerService.patch(options);
  }

  createPreference(data) {
    const options = {
      url: this.configService.urlConFig.URLS.ORGANIZATION.PREFERENCES_CREATE,
      data: data,
    };
    return this.learnerService.post(options);
  }
  //organization service code
}
