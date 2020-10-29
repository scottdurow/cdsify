/* eslint-disable*/
export interface ComplexAttributeMetadata {
  SourceType?: number;
  SchemaName?: string;
  RequiredLevel?: import("../complextypes/AttributeRequiredLevelManagedProperty").AttributeRequiredLevelManagedProperty;
  ModifiedOn?: Date;
  MetadataId?: import("../../types/Guid").Guid;
  LogicalName?: string;
  LinkedAttributeId?: import("../../types/Guid").Guid;
  IsValidForUpdate?: boolean;
  IsValidForRead?: boolean;
  IsValidForGrid?: boolean;
  IsValidForForm?: boolean;
  IsValidForCreate?: boolean;
  IsValidForAdvancedFind?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsSortableEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsSecured?: boolean;
  IsSearchable?: boolean;
  IsRetrievable?: boolean;
  IsRequiredForForm?: boolean;
  IsRenameable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsPrimaryName?: boolean;
  IsPrimaryId?: boolean;
  IsManaged?: boolean;
  IsLogical?: boolean;
  IsGlobalFilterEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsFilterable?: boolean;
  IsDataSourceSecret?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsCustomAttribute?: boolean;
  IsAuditEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IntroducedVersion?: string;
  InheritsFrom?: string;
  HasChanged?: boolean;
  ExternalName?: string;
  EntityLogicalName?: string;
  DisplayName?: import("../complextypes/Label").Label;
  Description?: import("../complextypes/Label").Label;
  DeprecatedVersion?: string;
  CreatedOn?: Date;
  ColumnNumber?: number;
  CanModifyAdditionalSettings?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanBeSecuredForUpdate?: boolean;
  CanBeSecuredForRead?: boolean;
  CanBeSecuredForCreate?: boolean;
  AutoNumberFormat?: string;
  AttributeTypeName?: import("../complextypes/AttributeTypeDisplayName").AttributeTypeDisplayName;
  AttributeType?: import("../enums/AttributeTypeCode").AttributeTypeCode;
  AttributeOf?: string;
}